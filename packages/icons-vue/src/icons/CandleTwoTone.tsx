// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CandleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CandleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CandleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CandleTwoTone: CandleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CandleTwoToneSvg}></AntdIcon>;
};

CandleTwoTone.displayName = 'CandleTwoTone';
CandleTwoTone.inheritAttrs = false;
export default CandleTwoTone;