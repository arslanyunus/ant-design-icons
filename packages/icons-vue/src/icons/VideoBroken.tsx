// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoBrokenSvg from '@ant-design/icons-svg/lib/asn/VideoBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoBroken: VideoBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoBrokenSvg}></AntdIcon>;
};

VideoBroken.displayName = 'VideoBroken';
VideoBroken.inheritAttrs = false;
export default VideoBroken;