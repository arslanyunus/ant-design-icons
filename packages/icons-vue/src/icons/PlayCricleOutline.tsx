// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayCricleOutlineSvg from '@ant-design/icons-svg/lib/asn/PlayCricleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayCricleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayCricleOutline: PlayCricleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayCricleOutlineSvg}></AntdIcon>;
};

PlayCricleOutline.displayName = 'PlayCricleOutline';
PlayCricleOutline.inheritAttrs = false;
export default PlayCricleOutline;