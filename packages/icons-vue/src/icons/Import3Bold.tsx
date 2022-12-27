// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Import3BoldSvg from '@ant-design/icons-svg/lib/asn/Import3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Import3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Import3Bold: Import3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Import3BoldSvg}></AntdIcon>;
};

Import3Bold.displayName = 'Import3Bold';
Import3Bold.inheritAttrs = false;
export default Import3Bold;