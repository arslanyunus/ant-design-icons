// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagRightBulkSvg from '@ant-design/icons-svg/lib/asn/TagRightBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagRightBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagRightBulk: TagRightBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagRightBulkSvg}></AntdIcon>;
};

TagRightBulk.displayName = 'TagRightBulk';
TagRightBulk.inheritAttrs = false;
export default TagRightBulk;