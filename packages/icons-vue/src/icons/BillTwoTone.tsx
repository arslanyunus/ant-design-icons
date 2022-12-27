// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BillTwoToneSvg from '@ant-design/icons-svg/lib/asn/BillTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BillTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BillTwoTone: BillTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BillTwoToneSvg}></AntdIcon>;
};

BillTwoTone.displayName = 'BillTwoTone';
BillTwoTone.inheritAttrs = false;
export default BillTwoTone;