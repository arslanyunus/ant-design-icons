// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayCricleLinearSvg from '@ant-design/icons-svg/lib/asn/PlayCricleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayCricleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayCricleLinear: PlayCricleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayCricleLinearSvg}></AntdIcon>;
};

PlayCricleLinear.displayName = 'PlayCricleLinear';
PlayCricleLinear.inheritAttrs = false;
export default PlayCricleLinear;