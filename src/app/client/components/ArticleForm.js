import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form'
export const fields = [ 'title', 'context' ]

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  } else if (values.title.length > 15) {
    errors.title = 'Must be 15 characters or less'
  }
  if (!values.context) {
    errors.context = 'Required'
  }
  return errors
}

class ArticleForm extends Component {
	constructor(props) {
    super(props);
  }
  render() {
  	const { fields: { title, context }, handleSubmit, submitting } = this.props
  	return (
  		<form className="form-horizontal" onSubmit={handleSubmit}>
				<div className={`control-group ${title.touched && title.error && 'form-error'}`}>
					<label className="control-label">文章标题</label>
					<div className="controls">
						<input type="text" {...title} />
						{title.touched && title.error && <div className="form-error-tips">{title.error}</div>}
					</div>
				</div>
				<div className="control-group">
					<label className="control-label">分类</label>
					<div className="controls">
						<input type="text" />
					</div>
				</div>
				<div className="control-group">
					<label className="control-label">预览图片地址</label>
					<div className="controls">
						<input type="text" />
					</div>
				</div>
				<div className="control-group">
					<label className="control-label">概要</label>
					<div className="controls">
						<input type="text" />
					</div>
				</div>
				<div className={`control-group ${context.touched && context.error && 'form-error'}`}>
					<label className="control-label">内容</label>
					<div className="controls">
						<textarea {...context}></textarea>
						{context.touched && context.error && <div className="form-error-tips">{context.error}</div>}
					</div>
				</div>
				<div className="form-actions">
					<button type="submit" className="btn btn-primary">Save</button>
				</div>
			</form>
  	)
  }
}

ArticleForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'articleForm',
  fields,
  validate
})(ArticleForm)