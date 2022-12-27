// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Eraser1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Eraser1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Eraser1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Eraser1TwoTone: Eraser1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Eraser1TwoToneSvg}></AntdIcon>;
};

Eraser1TwoTone.displayName = 'Eraser1TwoTone';
Eraser1TwoTone.inheritAttrs = false;
export default Eraser1TwoTone;