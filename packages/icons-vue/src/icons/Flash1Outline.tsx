// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Flash1OutlineSvg from '@ant-design/icons-svg/lib/asn/Flash1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Flash1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Flash1Outline: Flash1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Flash1OutlineSvg}></AntdIcon>;
};

Flash1Outline.displayName = 'Flash1Outline';
Flash1Outline.inheritAttrs = false;
export default Flash1Outline;