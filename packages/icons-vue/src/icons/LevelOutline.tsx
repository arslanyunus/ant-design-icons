// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LevelOutlineSvg from '@ant-design/icons-svg/lib/asn/LevelOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LevelOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LevelOutline: LevelOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LevelOutlineSvg}></AntdIcon>;
};

LevelOutline.displayName = 'LevelOutline';
LevelOutline.inheritAttrs = false;
export default LevelOutline;