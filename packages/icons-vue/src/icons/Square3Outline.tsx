// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Square3OutlineSvg from '@ant-design/icons-svg/lib/asn/Square3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Square3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Square3Outline: Square3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Square3OutlineSvg}></AntdIcon>;
};

Square3Outline.displayName = 'Square3Outline';
Square3Outline.inheritAttrs = false;
export default Square3Outline;