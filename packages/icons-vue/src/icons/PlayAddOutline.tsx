// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayAddOutlineSvg from '@ant-design/icons-svg/lib/asn/PlayAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayAddOutline: PlayAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayAddOutlineSvg}></AntdIcon>;
};

PlayAddOutline.displayName = 'PlayAddOutline';
PlayAddOutline.inheritAttrs = false;
export default PlayAddOutline;