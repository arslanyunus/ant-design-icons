// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LevelBulkSvg from '@ant-design/icons-svg/lib/asn/LevelBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LevelBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LevelBulk: LevelBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LevelBulkSvg}></AntdIcon>;
};

LevelBulk.displayName = 'LevelBulk';
LevelBulk.inheritAttrs = false;
export default LevelBulk;