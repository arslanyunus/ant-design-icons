// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayLinearSvg from '@ant-design/icons-svg/lib/asn/PlayLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayLinear: PlayLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayLinearSvg}></AntdIcon>;
};

PlayLinear.displayName = 'PlayLinear';
PlayLinear.inheritAttrs = false;
export default PlayLinear;