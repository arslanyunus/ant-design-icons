// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AutobrightnessBrokenSvg from '@ant-design/icons-svg/lib/asn/AutobrightnessBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AutobrightnessBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AutobrightnessBroken: AutobrightnessBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AutobrightnessBrokenSvg}></AntdIcon>;
};

AutobrightnessBroken.displayName = 'AutobrightnessBroken';
AutobrightnessBroken.inheritAttrs = false;
export default AutobrightnessBroken;