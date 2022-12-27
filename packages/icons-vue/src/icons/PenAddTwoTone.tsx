// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/PenAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenAddTwoTone: PenAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenAddTwoToneSvg}></AntdIcon>;
};

PenAddTwoTone.displayName = 'PenAddTwoTone';
PenAddTwoTone.inheritAttrs = false;
export default PenAddTwoTone;