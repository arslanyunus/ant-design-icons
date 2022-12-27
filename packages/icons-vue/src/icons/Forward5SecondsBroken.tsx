// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forward5SecondsBrokenSvg from '@ant-design/icons-svg/lib/asn/Forward5SecondsBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forward5SecondsBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forward5SecondsBroken: Forward5SecondsBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forward5SecondsBrokenSvg}></AntdIcon>;
};

Forward5SecondsBroken.displayName = 'Forward5SecondsBroken';
Forward5SecondsBroken.inheritAttrs = false;
export default Forward5SecondsBroken;