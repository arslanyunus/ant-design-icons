// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneySendBulkSvg from '@ant-design/icons-svg/lib/asn/MoneySendBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneySendBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneySendBulk: MoneySendBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneySendBulkSvg}></AntdIcon>;
};

MoneySendBulk.displayName = 'MoneySendBulk';
MoneySendBulk.inheritAttrs = false;
export default MoneySendBulk;