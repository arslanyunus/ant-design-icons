// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EraserTwoToneSvg from '@ant-design/icons-svg/lib/asn/EraserTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EraserTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EraserTwoTone: EraserTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EraserTwoToneSvg}></AntdIcon>;
};

EraserTwoTone.displayName = 'EraserTwoTone';
EraserTwoTone.inheritAttrs = false;
export default EraserTwoTone;