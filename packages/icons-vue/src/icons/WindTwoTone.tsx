// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WindTwoToneSvg from '@ant-design/icons-svg/lib/asn/WindTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WindTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WindTwoTone: WindTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WindTwoToneSvg}></AntdIcon>;
};

WindTwoTone.displayName = 'WindTwoTone';
WindTwoTone.inheritAttrs = false;
export default WindTwoTone;