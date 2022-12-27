// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/PlayRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayRemoveLinear: PlayRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayRemoveLinearSvg}></AntdIcon>;
};

PlayRemoveLinear.displayName = 'PlayRemoveLinear';
PlayRemoveLinear.inheritAttrs = false;
export default PlayRemoveLinear;