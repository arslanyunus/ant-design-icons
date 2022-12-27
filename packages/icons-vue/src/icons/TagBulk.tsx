// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagBulkSvg from '@ant-design/icons-svg/lib/asn/TagBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagBulk: TagBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagBulkSvg}></AntdIcon>;
};

TagBulk.displayName = 'TagBulk';
TagBulk.inheritAttrs = false;
export default TagBulk;