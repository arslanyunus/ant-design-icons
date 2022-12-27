// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/BrifecaseTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseTickTwoTone: BrifecaseTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseTickTwoToneSvg}></AntdIcon>;
};

BrifecaseTickTwoTone.displayName = 'BrifecaseTickTwoTone';
BrifecaseTickTwoTone.inheritAttrs = false;
export default BrifecaseTickTwoTone;