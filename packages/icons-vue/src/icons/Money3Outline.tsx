// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Money3OutlineSvg from '@ant-design/icons-svg/lib/asn/Money3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Money3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Money3Outline: Money3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Money3OutlineSvg}></AntdIcon>;
};

Money3Outline.displayName = 'Money3Outline';
Money3Outline.inheritAttrs = false;
export default Money3Outline;