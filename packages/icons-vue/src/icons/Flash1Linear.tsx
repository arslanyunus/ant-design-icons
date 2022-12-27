// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Flash1LinearSvg from '@ant-design/icons-svg/lib/asn/Flash1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Flash1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Flash1Linear: Flash1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Flash1LinearSvg}></AntdIcon>;
};

Flash1Linear.displayName = 'Flash1Linear';
Flash1Linear.inheritAttrs = false;
export default Flash1Linear;