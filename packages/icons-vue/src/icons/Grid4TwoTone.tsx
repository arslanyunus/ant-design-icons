// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid4TwoToneSvg from '@ant-design/icons-svg/lib/asn/Grid4TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid4TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid4TwoTone: Grid4TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid4TwoToneSvg}></AntdIcon>;
};

Grid4TwoTone.displayName = 'Grid4TwoTone';
Grid4TwoTone.inheritAttrs = false;
export default Grid4TwoTone;