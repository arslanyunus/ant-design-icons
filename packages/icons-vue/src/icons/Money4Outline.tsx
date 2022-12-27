// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Money4OutlineSvg from '@ant-design/icons-svg/lib/asn/Money4Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Money4OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Money4Outline: Money4OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Money4OutlineSvg}></AntdIcon>;
};

Money4Outline.displayName = 'Money4Outline';
Money4Outline.inheritAttrs = false;
export default Money4Outline;