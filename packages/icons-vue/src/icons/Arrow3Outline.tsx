// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Arrow3OutlineSvg from '@ant-design/icons-svg/lib/asn/Arrow3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Arrow3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Arrow3Outline: Arrow3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Arrow3OutlineSvg}></AntdIcon>;
};

Arrow3Outline.displayName = 'Arrow3Outline';
Arrow3Outline.inheritAttrs = false;
export default Arrow3Outline;