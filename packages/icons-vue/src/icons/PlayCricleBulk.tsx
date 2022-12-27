// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayCricleBulkSvg from '@ant-design/icons-svg/lib/asn/PlayCricleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayCricleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayCricleBulk: PlayCricleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayCricleBulkSvg}></AntdIcon>;
};

PlayCricleBulk.displayName = 'PlayCricleBulk';
PlayCricleBulk.inheritAttrs = false;
export default PlayCricleBulk;