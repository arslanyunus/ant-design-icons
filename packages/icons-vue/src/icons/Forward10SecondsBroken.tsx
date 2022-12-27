// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forward10SecondsBrokenSvg from '@ant-design/icons-svg/lib/asn/Forward10SecondsBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forward10SecondsBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forward10SecondsBroken: Forward10SecondsBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forward10SecondsBrokenSvg}></AntdIcon>;
};

Forward10SecondsBroken.displayName = 'Forward10SecondsBroken';
Forward10SecondsBroken.inheritAttrs = false;
export default Forward10SecondsBroken;