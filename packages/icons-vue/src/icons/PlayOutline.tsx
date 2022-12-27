// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayOutlineSvg from '@ant-design/icons-svg/lib/asn/PlayOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayOutline: PlayOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayOutlineSvg}></AntdIcon>;
};

PlayOutline.displayName = 'PlayOutline';
PlayOutline.inheritAttrs = false;
export default PlayOutline;