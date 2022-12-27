// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid8TwoToneSvg from '@ant-design/icons-svg/lib/asn/Grid8TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid8TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid8TwoTone: Grid8TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid8TwoToneSvg}></AntdIcon>;
};

Grid8TwoTone.displayName = 'Grid8TwoTone';
Grid8TwoTone.inheritAttrs = false;
export default Grid8TwoTone;