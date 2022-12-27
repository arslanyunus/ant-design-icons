// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Tag2BulkSvg from '@ant-design/icons-svg/lib/asn/Tag2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Tag2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Tag2Bulk: Tag2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Tag2BulkSvg}></AntdIcon>;
};

Tag2Bulk.displayName = 'Tag2Bulk';
Tag2Bulk.inheritAttrs = false;
export default Tag2Bulk;