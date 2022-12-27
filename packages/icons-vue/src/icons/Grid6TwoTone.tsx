// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid6TwoToneSvg from '@ant-design/icons-svg/lib/asn/Grid6TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid6TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid6TwoTone: Grid6TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid6TwoToneSvg}></AntdIcon>;
};

Grid6TwoTone.displayName = 'Grid6TwoTone';
Grid6TwoTone.inheritAttrs = false;
export default Grid6TwoTone;