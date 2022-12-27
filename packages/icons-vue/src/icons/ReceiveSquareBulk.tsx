// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiveSquareBulkSvg from '@ant-design/icons-svg/lib/asn/ReceiveSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiveSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiveSquareBulk: ReceiveSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiveSquareBulkSvg}></AntdIcon>;
};

ReceiveSquareBulk.displayName = 'ReceiveSquareBulk';
ReceiveSquareBulk.inheritAttrs = false;
export default ReceiveSquareBulk;