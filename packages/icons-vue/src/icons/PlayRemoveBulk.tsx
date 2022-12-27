// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/PlayRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayRemoveBulk: PlayRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayRemoveBulkSvg}></AntdIcon>;
};

PlayRemoveBulk.displayName = 'PlayRemoveBulk';
PlayRemoveBulk.inheritAttrs = false;
export default PlayRemoveBulk;