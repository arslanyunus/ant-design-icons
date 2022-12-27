// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagCrossBulkSvg from '@ant-design/icons-svg/lib/asn/TagCrossBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagCrossBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagCrossBulk: TagCrossBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagCrossBulkSvg}></AntdIcon>;
};

TagCrossBulk.displayName = 'TagCrossBulk';
TagCrossBulk.inheritAttrs = false;
export default TagCrossBulk;