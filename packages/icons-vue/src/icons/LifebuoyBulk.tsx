// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LifebuoyBulkSvg from '@ant-design/icons-svg/lib/asn/LifebuoyBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LifebuoyBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LifebuoyBulk: LifebuoyBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LifebuoyBulkSvg}></AntdIcon>;
};

LifebuoyBulk.displayName = 'LifebuoyBulk';
LifebuoyBulk.inheritAttrs = false;
export default LifebuoyBulk;