// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Arrow3BulkSvg from '@ant-design/icons-svg/lib/asn/Arrow3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Arrow3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Arrow3Bulk: Arrow3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Arrow3BulkSvg}></AntdIcon>;
};

Arrow3Bulk.displayName = 'Arrow3Bulk';
Arrow3Bulk.inheritAttrs = false;
export default Arrow3Bulk;