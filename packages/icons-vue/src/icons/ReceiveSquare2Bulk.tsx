// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiveSquare2BulkSvg from '@ant-design/icons-svg/lib/asn/ReceiveSquare2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiveSquare2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiveSquare2Bulk: ReceiveSquare2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiveSquare2BulkSvg}></AntdIcon>;
};

ReceiveSquare2Bulk.displayName = 'ReceiveSquare2Bulk';
ReceiveSquare2Bulk.inheritAttrs = false;
export default ReceiveSquare2Bulk;