// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Logout1BulkSvg from '@ant-design/icons-svg/lib/asn/Logout1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Logout1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Logout1Bulk: Logout1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Logout1BulkSvg}></AntdIcon>;
};

Logout1Bulk.displayName = 'Logout1Bulk';
Logout1Bulk.inheritAttrs = false;
export default Logout1Bulk;