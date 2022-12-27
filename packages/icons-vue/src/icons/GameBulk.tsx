// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GameBulkSvg from '@ant-design/icons-svg/lib/asn/GameBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GameBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GameBulk: GameBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GameBulkSvg}></AntdIcon>;
};

GameBulk.displayName = 'GameBulk';
GameBulk.inheritAttrs = false;
export default GameBulk;