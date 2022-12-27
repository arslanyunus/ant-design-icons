// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RedoBoldSvg from '@ant-design/icons-svg/lib/asn/RedoBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RedoBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RedoBold: RedoBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedoBoldSvg}></AntdIcon>;
};

RedoBold.displayName = 'RedoBold';
RedoBold.inheritAttrs = false;
export default RedoBold;