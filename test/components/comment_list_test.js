import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments : ['hello', 'new comment'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an LI for each element', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is added', () => {
    expect(component).to.contain('hello');
    expect(component).to.contain('new comment');
  });
});
