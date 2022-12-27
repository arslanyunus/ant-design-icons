// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Money3BoldSvg from '@ant-design/icons-svg/lib/asn/Money3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Money3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Money3Bold: Money3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Money3BoldSvg}></AntdIcon>;
};

Money3Bold.displayName = 'Money3Bold';
Money3Bold.inheritAttrs = false;
export default Money3Bold;