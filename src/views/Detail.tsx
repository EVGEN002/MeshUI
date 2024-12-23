import React, { useEffect, useState } from 'react';
import { MapPin, ArrowLeft, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Map from 'MapProvider/MapComponentContainer';

import '@/assets/global.css';

import {
  getCurrentUser,
  getDictionary,
  getDictionaryFundsettings,
  getSpatialData,
  postToCart
} from '@/api';

import { Material, RepoFile } from '@/types/spatialData';
import { toast } from 'react-toastify';
import { Badge } from '@/components/ui/badge';

interface DetailProps {
  id: string;
}

export default function Detail({ id }: DetailProps) {
  const [data, setData] = useState<Material | null>(null);
  const [baseDictionary, setBaseDictionary] = useState<{
    [key: string]: any[];
  }>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [cartCount, setCartCount] = useState<number | null>(null);
  const [adding, setAdding] = useState(false);

  const handleSetBaseDictionary = <T,>(
    promiseResult: PromiseSettledResult<T>,
    key: string,
    setter: React.Dispatch<React.SetStateAction<T>>
  ): T | null | undefined => {
    if (promiseResult.status === 'fulfilled') {
      const promiseData = promiseResult.value;

      setter((prev) => ({ ...prev, [key]: promiseData }));

      return promiseData;
    } else if (promiseResult.status === 'rejected') {
      console.error(promiseResult.reason);

      return null;
    }
  };

  useEffect(() => {
    (async () => {
      getSpatialData(id).then((res) => setData(res));
    })();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const p_me = getCurrentUser();
      const p_material = getSpatialData(id);
      const p_secretStatusTypes = getDictionary('secretStatusTypes');
      const p_materialOrderTypes = getDictionary('materialOrderTypes');
      const p_basetype = getDictionary('basetype');
      const p_purchase_method = getDictionary('purchase_method');
      const p_material_form = getDictionary('material_form');
      const p_paper_size = getDictionary('paper_size');
      const p_condition = getDictionary('condition');
      const p_expiration = getDictionary('expiration');
      const p_dayoffs = getDictionary('dayoffs');
      const p_appform_structure = getDictionary('appform_structure');
      const p_appform = getDictionary('appform');
      const p_materialcreator = getDictionary('materialcreator');
      const p_coordinateSystems = getDictionary('coordinateSystems');
      const p_displayforms = getDictionary('displayforms');
      const p_order_types = getDictionary('order_types');
      const p_order_status = getDictionary('order_status');
      const p_materialtypes = getDictionary('materialtypes');
      const p_location = getDictionary('location');
      const p_materialformats = getDictionary('materialformats');
      const p_ListOfRackValues = getDictionaryFundsettings('ListOfRackValues');
      const p_ListOfSectionValues = getDictionaryFundsettings(
        'ListOfSectionValues'
      );
      const p_ListOfShelfValues =
        getDictionaryFundsettings('ListOfShelfValues');
      const p_ListOfCellValues = getDictionaryFundsettings('ListOfCellValues');
      const p_materialbaseunits = getDictionary('materialbaseunits');

      const [
        r_me,
        r_material,
        r_secrectStatusTypes,
        r_materialOrderTypes,
        r_baseType,
        r_purchase_method,
        r_material_form,
        r_paper_size,
        r_condition,
        r_expiration,
        r_dayoffs,
        r_appform_structure,
        r_appform,
        r_materialcreator,
        r_coordinateSystems,
        r_displayforms,
        r_order_types,
        r_order_status,
        r_materialtypes,
        r_location,
        r_materialformats,
        r_ListOfRackValues,
        r_ListOfSectionValues,
        r_ListOfShelfValues,
        r_ListOfCellValues,
        r_materialbaseunits
      ] = await Promise.allSettled([
        p_me,
        p_material,
        p_secretStatusTypes,
        p_materialOrderTypes,
        p_basetype,
        p_purchase_method,
        p_material_form,
        p_paper_size,
        p_condition,
        p_expiration,
        p_dayoffs,
        p_appform_structure,
        p_appform,
        p_materialcreator,
        p_coordinateSystems,
        p_displayforms,
        p_order_types,
        p_order_status,
        p_materialtypes,
        p_location,
        p_materialformats,
        p_ListOfRackValues,
        p_ListOfSectionValues,
        p_ListOfShelfValues,
        p_ListOfCellValues,
        p_materialbaseunits
      ]);

      handleSetBaseDictionary<any>(
        r_secrectStatusTypes,
        'secretStatusTypes',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(
        r_materialOrderTypes,
        'materialOrderTypes',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(r_baseType, 'basetype', setBaseDictionary);
      handleSetBaseDictionary<any>(
        r_purchase_method,
        'purchase_method',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(
        r_material_form,
        'material_form',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(
        r_paper_size,
        'paper_size',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(r_condition, 'condition', setBaseDictionary);
      handleSetBaseDictionary<any>(
        r_expiration,
        'expiration',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(r_dayoffs, 'dayoffs', setBaseDictionary);
      handleSetBaseDictionary<any>(
        r_appform_structure,
        'appform_structure',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(r_appform, 'appform', setBaseDictionary);
      handleSetBaseDictionary<any>(
        r_materialcreator,
        'materialcreator',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(
        r_coordinateSystems,
        'coordinateSystems',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(
        r_displayforms,
        'displayforms',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(
        r_order_types,
        'order_types',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(
        r_order_status,
        'order_status',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(
        r_materialtypes,
        'materialtypes',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(r_location, 'location', setBaseDictionary);
      handleSetBaseDictionary<any>(
        r_materialformats,
        'materialformats',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(
        r_ListOfRackValues,
        'ListOfRackValues',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(
        r_ListOfSectionValues,
        'ListOfSectionValues',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(
        r_ListOfShelfValues,
        'ListOfCellValues',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(
        r_ListOfCellValues,
        'ListOfCellValues',
        setBaseDictionary
      );
      handleSetBaseDictionary<any>(
        r_materialbaseunits,
        'materialbaseunits',
        setBaseDictionary
      );
      if (r_material.status === 'fulfilled') {
        const data = r_material.value;

        setData(data);
      }
      if (r_me.status === 'fulfilled') {
        const data: any = r_me.value;

        setCartCount(data.cartCount);
      }
      setIsLoaded(true);
    };

    fetchData();
  }, []);

  const returnRepoSrc = (code: string | null, ext: string | null) => {
    const MODE = process.env.MODE;
    let src: string;

    if (MODE === 'production') {
      src = `/apimap/repo/${code}${ext}`;
    } else if (MODE === 'local') {
      src = `/sakhagis/apimap/repo/${code}${ext}`;
    } else if (MODE === 'development') {
      src = `https://yakit.pro/sakhagis/apimap/repo/${code}${ext}`;
    } else {
      src = '';
    }

    return src;
  };

  const returnFileSrcFromPath = (path: string | null, ext: string | null) => {
    if (!path) return;
    const MODE = process.env.MODE;
    let src: string;
    const normalizedPath = path.replace(/\\/g, '/');

    if (MODE === 'production') {
      src = `/storage/${normalizedPath}`;
    } else if (MODE === 'local') {
      src = `/sakhagis/storage/${normalizedPath}`;
    } else if (MODE === 'development') {
      src = `https://yakit.pro/sakhagis/storage/${normalizedPath}`;
    } else {
      src = '';
    }

    return src;
  };

  const renderDoc = (file: RepoFile) => {
    const MODE = process.env.MODE;
    let link: string;

    if (MODE === 'production') {
      link = `/apimap/repo/${file.code}`;
    } else if (MODE === 'local') {
      link = `/sakhagis/apimap/repo/${file.code}`;
    } else if (MODE === 'development') {
      link = `https://yakit.pro/sakhagis/apimap/repo/${file.code}`;
    } else {
      link = '';
    }

    const name = file?.name ?? '';
    const ext = file?.ext ?? '';

    return <a href={link}>{name + ext}</a>;
  };

  const backHref = () => {
    const MODE = process.env.MODE;
    let href: string;

    if (MODE === 'production') {
      href = '/material/';
    } else if (MODE === 'local') {
      href = '/sakhagis/material/';
    } else if (MODE === 'development') {
      href = 'https://yakit.pro/sakhagis/material/';
    } else {
      href = '';
    }

    return href;
  };

  const addToCart = async () => {
    setAdding(true);
    try {
      await postToCart({ materialId: id, quantity: 1 });

      toast.success('Заявление успешно добавлено');
      setCartCount((prev) => (prev ? prev + 1 : null));
      setAdding(false);
    } catch {
      toast.error('Ошибка добавления заявления');
      setAdding(false);
    }
  };

  const cartHref = () => {
    const MODE = process.env.MODE;
    let href: string;

    if (MODE === 'production') {
      href = '/lk?cart';
    } else if (MODE === 'local') {
      href = '/sakhagis/lk?cart';
    } else if (MODE === 'development') {
      href = '/sakhagis/lk?cart';
    } else {
      href = '';
    }

    return href;
  };

  return (
    <div className="h-full overflow-auto px-[30px]">
      <div className="mb-[30px] grid h-full grid-cols-1 gap-6 py-[30px] lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2" size={20} />
              Пространственные данные
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label className="font-medium">Наименование</Label>
                <p className="line-clamp-1">{data?.name}</p>
              </div>
              <div>
                <Label className="font-medium">
                  Вид пространственных данных
                </Label>
                <p>
                  {
                    baseDictionary?.displayforms?.find(
                      (item) => item?.id == data?.displayForm
                    )?.name
                  }
                </p>
              </div>
              <div>
                <Label className="font-medium">Местоположение территории</Label>
                <p>
                  {data?.location ? (
                    data.location
                  ) : (
                    <Badge variant="secondary">Нет данных</Badge>
                  )}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="font-medium">Год создания</Label>
                  <p>
                    {data?.yearCreate ? (
                      data.yearCreate
                    ) : (
                      <Badge variant="secondary">Нет данных</Badge>
                    )}
                  </p>
                </div>
                <div>
                  <Label className="font-medium">Система координат</Label>
                  <p>
                    {baseDictionary?.coordinateSystems?.find(
                      (item) => item?.id == data?.baseType
                    )?.name ?? <Badge variant="secondary">Нет данных</Badge>}
                  </p>
                </div>
                <div>
                  <Label className="font-medium">Масштаб</Label>
                  <p>
                    {data?.scale ? (
                      `1 : ${data.scale}`
                    ) : (
                      <Badge variant="secondary">Нет данных</Badge>
                    )}
                  </p>
                </div>
                <div>
                  <Label className="font-medium">Формат хранения</Label>
                  <p>
                    {data?.formats && data?.formats.length > 0 ? (
                      data?.formats!.join(', ')
                    ) : (
                      <Badge variant="secondary">Нет данных</Badge>
                    )}
                  </p>
                </div>
              </div>
              <div>
                <Label className="font-medium">Секретность</Label>
                <p>
                  {baseDictionary?.secretStatusTypes?.find(
                    (item) => item?.id === data?.secretStatus
                  )?.name ?? <Badge variant="secondary">Нет данных</Badge>}
                </p>
              </div>
              <div>
                <Label className="font-medium">Организация-изготовитель</Label>
                <p>
                  {baseDictionary?.materialcreator?.find(
                    (item) => item?.id == data?.materialCreatorId
                  )?.name ?? <Badge variant="secondary">Нет данных</Badge>}
                </p>
              </div>
              <div>
                <Label className="font-medium">Правообладатель</Label>
                <p>
                  {data?.mapOwner ?? (
                    <Badge variant="secondary">Нет данных</Badge>
                  )}
                </p>
              </div>
              <div>
                <Label className="font-medium">
                  Год соответствия местности
                </Label>
                <p>
                  {data?.yearConformity ?? (
                    <Badge variant="secondary">Нет данных</Badge>
                  )}
                </p>
              </div>
              <div>
                <Label className="font-medium">Условия доступа</Label>
                <p>
                  {data?.accessConditions ?? (
                    <Badge variant="secondary">Нет данных</Badge>
                  )}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Контур пространственных данных</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video overflow-hidden rounded-lg bg-gray-200">
              {data?.geometry && (
                <Map type="spatial-data" geometry={data?.geometryString} />
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>
              Изображения предпросмотра пространственных данных
            </CardTitle>
          </CardHeader>
          <CardContent>
            {data?.repoFiles?.repoAttachedFiles &&
            data?.repoFiles?.repoAttachedFiles?.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data?.repoFiles.repoAttachedFiles.map((file) => (
                  <img
                    src={`${returnRepoSrc(file?.code, 'jpg')}`}
                    alt="Preview 1"
                    className="h-auto w-[400px] rounded-lg"
                    width={400}
                  />
                ))}
              </div>
            ) : data?.attachedFilesList &&
              data?.attachedFilesList?.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data?.attachedFilesList.map((file) => (
                  <img
                    src={`${returnFileSrcFromPath(file?.path, 'jpg')}`}
                    alt="Preview 1"
                    className="h-auto w-[400px] rounded-lg"
                    width={400}
                  />
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-gray-500">
                Нет доступных файлов
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Файлы пространственных данных</CardTitle>
          </CardHeader>
          <CardContent>
            {data?.repoFiles?.repoStorageFiles &&
            data?.repoFiles.repoStorageFiles.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data?.repoFiles.repoStorageFiles.map((file) =>
                  renderDoc(file)
                )}
              </div>
            ) : (
              <div className="py-8 text-center text-gray-500">
                Нет доступных файлов
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardContent className="flex justify-between pt-6">
            <a onClick={() => history.back()}>
              <Button variant="outline">
                <ArrowLeft className="mr-2" size={16} />
                Назад к каталогу
              </Button>
            </a>
            <div className="flex space-x-4">
              <a href={cartHref()} className="cursor-pointer">
                <Button className="relative" variant="outline">
                  В заявлении
                  {!!cartCount && (
                    <Badge className="absolute -right-2 -top-2">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </a>
              <Button
                className="flex gap-2"
                onClick={addToCart}
                disabled={!isLoaded || adding}
              >
                {adding ? (
                  <>
                    Добавление{' '}
                    <LoaderCircle className="h-4 w-4 animate-spin duration-500" />
                  </>
                ) : (
                  'Добавить в заявление'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
        <div></div>
      </div>

      {/* <div className="mt-6 flex justify-between">
        <Button variant="outline" onClick={backHref}>
          <ArrowLeft className="mr-2" size={16} />
          Назад к каталогу
        </Button>
      </div> */}
    </div>
  );
}
