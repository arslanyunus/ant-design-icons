// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid8OutlineSvg from '@ant-design/icons-svg/lib/asn/Grid8Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid8OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid8Outline: Grid8OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid8OutlineSvg}></AntdIcon>;
};

Grid8Outline.displayName = 'Grid8Outline';
Grid8Outline.inheritAttrs = false;
export default Grid8Outline;