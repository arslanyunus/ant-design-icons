// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayAddLinearSvg from '@ant-design/icons-svg/lib/asn/PlayAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayAddLinear: PlayAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayAddLinearSvg}></AntdIcon>;
};

PlayAddLinear.displayName = 'PlayAddLinear';
PlayAddLinear.inheritAttrs = false;
export default PlayAddLinear;