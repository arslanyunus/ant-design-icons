// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CupTwoToneSvg from '@ant-design/icons-svg/lib/asn/CupTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CupTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CupTwoTone: CupTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CupTwoToneSvg}></AntdIcon>;
};

CupTwoTone.displayName = 'CupTwoTone';
CupTwoTone.inheritAttrs = false;
export default CupTwoTone;