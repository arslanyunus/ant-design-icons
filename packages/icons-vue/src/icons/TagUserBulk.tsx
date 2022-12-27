// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagUserBulkSvg from '@ant-design/icons-svg/lib/asn/TagUserBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagUserBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagUserBulk: TagUserBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagUserBulkSvg}></AntdIcon>;
};

TagUserBulk.displayName = 'TagUserBulk';
TagUserBulk.inheritAttrs = false;
export default TagUserBulk;