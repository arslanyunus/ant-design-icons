// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Maximize1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize1TwoTone: Maximize1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize1TwoToneSvg}></AntdIcon>;
};

Maximize1TwoTone.displayName = 'Maximize1TwoTone';
Maximize1TwoTone.inheritAttrs = false;
export default Maximize1TwoTone;