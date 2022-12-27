// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import More2BulkSvg from '@ant-design/icons-svg/lib/asn/More2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface More2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const More2Bulk: More2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={More2BulkSvg}></AntdIcon>;
};

More2Bulk.displayName = 'More2Bulk';
More2Bulk.inheritAttrs = false;
export default More2Bulk;