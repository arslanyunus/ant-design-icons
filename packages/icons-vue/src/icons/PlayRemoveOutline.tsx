// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/PlayRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayRemoveOutline: PlayRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayRemoveOutlineSvg}></AntdIcon>;
};

PlayRemoveOutline.displayName = 'PlayRemoveOutline';
PlayRemoveOutline.inheritAttrs = false;
export default PlayRemoveOutline;